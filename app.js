var drupalServices = function() {
  this.url = document.getElementById('ip').value + '/dcoslo/endpoint';
  this.data;
  this.method;
  this.callback = function(data) {
    console.log(data);
  }
  this.image = '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';
}
drupalServices.prototype.post = function() {
  var service = this;
  var xhr = this.xhr('post', function(data) {
    service.callback(data);
  });
  xhr.send(JSON.stringify(this.data));
}
drupalServices.prototype.get = function() {
  var service = this;
  var xhr = this.xhr('get', function(data) {
    service.callback(data);
  });
  xhr.send();
}
drupalServices.prototype.addFile = function() {
  var service = this;
  this.data = {
    'file': this.image,
    'filename': 'secretimage.png'
  }
  var xhr = this.xhr('post', function(data) {
    service.callback(data)
  });
  xhr.send(JSON.stringify(this.data));
}
drupalServices.prototype.xhr = function(op, fn) {
  var url = this.url + '/' + this.method + '.json';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      fn(JSON.parse(xhr.responseText));
    }
  }
  switch (op) {
    case 'get':
      xhr.open('GET', url, true);
      break;
    case 'post':
      xhr.open('POST', url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      break;
  }
  return xhr;
}

document.getElementById('clickthis').addEventListener('click', function() {
  navigator.camera.getPicture(function(data) {
    var drupal = new drupalServices();
    drupal.method = 'file';
    drupal.image = data;
    drupal.callback = function(data) {
      var drupal = new drupalServices();
      drupal.method = 'node';
      drupal.data = {
        'title': 'testing',
        'field_image': {
          'und': {
            0: {
              'fid': data.fid
            }
          }
        }
      }
      drupal.callback = function(data) {
        alert('Success!!!');
      }
      drupal.post();
    }
    drupal.addFile();
  }, function() {},  { quality: 50 });
})
document.getElementById('login').addEventListener('click', function() {
  var drupal = new drupalServices();
  drupal.method = 'user/login';
  drupal.data = {
    'username': document.getElementById('apptitle').value,
    'password': document.getElementById('appbody').value
  }
  drupal.post();
});
