const arr = ['kaylin', 'ram', 'gopal', 'ankit'];

const userDetails = {
  'kaylin': 'khanal',
  'alisha': 'rauniyar',
  'ayush': 'rai',
  'gopal': 'tharu'
};

let string=arr.map((item)=>{

    if(userDetails[item])
        {
            return item+''+ userDetails['kaylin']
        }
}).filter(item=>item);
  console.log(string);