function saturdayFun(act = "roller-skate"){
    return `This Saturday, I want to ${act}!`;
};
saturdayFun("bathe");

function mondayWork(act1 = "go to the office"){
    return `This Monday, I will ${act1}.`
}

 function wrapAdjective(wrap="*") {
    return function(adj="special") {
      return `You are ${wrap}${adj}${wrap}!`
    }
  }