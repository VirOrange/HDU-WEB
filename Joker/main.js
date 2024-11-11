const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

let storyText = "今天气温 :temperature: 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，:customName:全程目睹但并没有慌，因为:inserta:是一个 :weight: 公斤的胖子，天气又辣么热。";
let insertX = ["怪兽威利","大老爹","圣诞老人"];
let insertY = ["肯德基","迪士尼乐园","白宫"];
let insertZ = ["自燃了","在人行道化成了一坨泥","变成一条鼻涕虫爬走了"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  //let name = customName.value.trim(); // 获取用户输入的名字，并去除前后空格

  newStory = newStory.replace(":inserta:", xItem);
  newStory = newStory.replace(":inserta:", xItem);
  newStory = newStory.replace(":insertb:", yItem);
  newStory = newStory.replace(":insertc:", zItem);
  


  // 根据用户选择的度量单位，设置温度和重量
  let temperature, weight,customName;
  if(document.getElementById("american").checked) {
    weight = Math.round(300);
    temperature = Math.round(94);
    newStory = newStory.replace(":weight:", weight);
    customName="Bob"
    newStory = newStory.replace(":temperature:", temperature);
    newStory = newStory.replace(":customName:", customName);

  } else {
    weight = Math.round(130);
    temperature = Math.round(34);
  }

  story.textContent = newStory; 
  story.style.visibility = "visible";
}


