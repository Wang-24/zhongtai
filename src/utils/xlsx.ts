// xlsx 导出插件
import * as XLSX from 'xlsx';

// 替换key为中文
const replaceKeyInObjectArray = (a, r) =>
  a.map((o) =>
    Object.keys(o)
      .map((key) => (r[key] ? { [r[key]]: o[key] } : {}))
      .reduce((a, b) => Object.assign({}, a, b)),
  );

/**
 * 导出excel
 * @param data
 * @param name
 * @param replaceMap 可选
 * @private
 */
function _export(data:{}, name:string, replaceMap:any) {
  // convert json to sheet
  let labeledData = data;

  // 替换key为中文
  if (replaceMap) {
    labeledData = replaceKeyInObjectArray(data, replaceMap);
  }
  const ws:any = XLSX.utils.json_to_sheet(labeledData);
  const range = XLSX.utils.decode_range(ws['!ref']);

  // 解决导出纯数字以科学计数显示的问题
  for (var r = range.s.r; r <= range.e.r; r++) {
    for (var c = range.s.c; c <= range.e.c; c++) {
      var cellName = XLSX.utils.encode_cell({ c: c, r: r });
      ws[cellName].z = '@';
    }
  }
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  // save
  XLSX.writeFile(wb, `${name}.xlsx`);
}

/**
 * 导入excel
 * @param file  文件对象
 * @param callBack
 * @private
 */
function _import(file:any, callBack:Function) {
  const reader = new FileReader();
  reader.onload = (e:any) => {
    var binary = '';
    var bytes = new Uint8Array(e.target.result);
    var length = bytes.byteLength;
    for (var i = 0; i < length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }

    /* read workbook */
    var wb = XLSX.read(binary, { type: 'binary' });

    /* grab first sheet */
    var wsname = wb.SheetNames[0];
    var ws = wb.Sheets[wsname];

    const jsonData = XLSX.utils.sheet_to_json(ws, { header: 1 });

    // 成功回调函数
    callBack(jsonData.slice(1));
  };
  reader.readAsArrayBuffer(file);
}

export { _export, _import };
