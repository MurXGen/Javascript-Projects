function fetchData(callback) {
    setTimeout(function() {
      callback("Data received");
    }, 1000); // Simulates a delay of 1 second
  }
  
  fetchData(function(message) {
    console.log(message);
  });