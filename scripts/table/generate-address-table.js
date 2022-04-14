const {
    getFiles,
    writeFile,
    alignSwitch
} = require('./helper.js')

function gimmeHeaders() {
    return(`
| Contract     | Address                                    | Source |
| :---         |                                       ---: |   ---: |
`)
}

function formatData(data) {
    return(data.map(el => (`| ${el.contract} | ${el.address} | [Github](${linkOrigin}${el.source_file}) |`)).join('\n'))
}

function formatTableData(el) {

    const headers = el.headers
    const align = el.align
    const rows = el.rows
    const format = el.format

    const formatter = (data, mapper) => (
        "| " + data.map((el, i) => mapper(el, i)).join(' | ') + " |"
    )

    const formattedHeader = formatter(headers, (e,)=>(e))
    const formattedAlign  = formatter(align, (e,) => alignSwitch(e))
    const formattedData   = rows.map(
        el => formatter(Object.values(el), (e,i)=> format[i].split('{}').join(e) )
    ).join('\n')

    return(`${formattedHeader}
${formattedAlign}
${formattedData}
`)

        //gimmeHeaders() + formatData(el.data)
}

async function getTableDatas() {

    let fl = [];
    for await (const f of getFiles('./data')) {
        let fsp = f.split('\\')
        const fileName = fsp[fsp.length - 1]
        const thisData = require(f)
        fl.push({
            file: fileName,
            headers: thisData.headers,
            rows: thisData.rows,
            align: thisData.align,
            format: thisData.dataFormat
        })
    }
    return(fl)
}

async function main() {

    const datas = await getTableDatas();

    datas.map(el => {
        const content = formatTableData(el)

        writeFile(`./scripts/table/gen/${el.file.split('.')[0]}.md`,content)
        console.log(`wrote file ${el.file.split('.')[0]}.md`)
        return
    })

    console.log('done')

}

main()

module.exports = {
    main
}