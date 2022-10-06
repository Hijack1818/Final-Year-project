var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://clist.by/account/shivam9464/resource/codechef.com/ratings/?resource=codechef.com',
  formData: {

  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  const jason=JSON.parse(response.body);
  console.log(jason.data.resources['codechef.com'].data);
});
