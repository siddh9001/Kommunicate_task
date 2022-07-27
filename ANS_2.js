//2. Complete the following javascript function that accepts the url and the parameter
// name and returns the value of that parameter

var url =
  "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";

function getUrlParameterValue(url, parameter) {
  const list = url.split('&');
  // console.log(list);
  for (let index = 1; index < list.length; index++) {
    const element = list[index].split('=');
    if(element[0] === parameter)
      console.log(element[1]);
    
  }
}

getUrlParameterValue(url, "utm_medium");
getUrlParameterValue(url, "utm_campaign");
