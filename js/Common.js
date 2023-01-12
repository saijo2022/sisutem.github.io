// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : 指定した秒数停止
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
function sleep(waitSec, callbackFunc) {
 
  var spanedSec = 0;
 
  var waitFunc = function () {
 
      spanedSec++;
 
      if (spanedSec >= waitSec) {
          if (callbackFunc) callbackFunc();
          return;
      }
 
      clearTimeout(id);
      id = setTimeout(waitFunc, 1000);
  
  };
 
  var id = setTimeout(waitFunc, 1000);
 
}

// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : 指定したファイルを読み込んで配列を返す。
// note  : 改行で区切る。
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
function readTextFileToArray(file) {
    
    var array;
    
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // alert(allText);
                
                array = allText.split(/[\r\n]+/);
            }
        }
    }
    rawFile.send(null);
    
    return array;
}
