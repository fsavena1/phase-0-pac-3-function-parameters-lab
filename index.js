// function say(introduction, firstName) {
//   console.log(firstName , "User");
//   console.log(introduction , "Hello,");
//   console.log(`Hello, ${firstName}!`)


  function introduction(name){
    return(`Hi, my name is ${name}.`);
  }

  // introduction("Frank")

  function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}


function introductionWithLanguageOptional(name, language = "JavaScript") {
  return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
