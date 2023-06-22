//Soal nomor 1//
//Call back Function//
function sendRequestWithCallback(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(null, response);
      } else {
        callback(xhr.status);
      }
    };
    
    xhr.onerror = function() {
      callback("Request failed");
    };
    
    xhr.send();
  }
  
// Contoh penggunaan
  sendRequestWithCallback(function(error, response) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Response:", response);
    }
  });
  
//Promise//
  function sendRequestWithPromise() {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    
      xhr.onload = function() {
        if (xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          reject(xhr.status);
        }
      };
      
      xhr.onerror = function() {
        reject("Request failed");
      };
      
      xhr.send();
    });
  }
  
  // Contoh penggunaan
  sendRequestWithPromise()
    .then(function(response) {
      console.log("Response:", response);
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
  
// Soal nomor 2 //
  function generateId(length) {
    return new Promise(function(resolve, reject) {
      if (typeof length !== 'number') {
        reject(new Error('Parameter harus berupa angka'));
      } else {
        setTimeout(function() {
          var id = '';
          var characters = '0123456789';
          var charactersLength = characters.length;
          for (var i = 0; i < length; i++) {
            id += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          resolve(id);
        }, 1000); // Menggunakan setTimeout untuk mensimulasikan proses asynchronous
      }
    });
  }
  
  //Contoh Penggunaan//
  generateId(6)
    .then(function(id) {
      console.log(id);
    })
    .catch(function(error) {
      console.log(error.message);
    });
  
  generateId(12)
    .then(function(id) {
      console.log(id);
    })
    .catch(function(error) {
      console.log(error.message);
    });
  
  generateId('Java')
    .then(function(id) {
      console.log(id);
    })
    .catch(function(error) {
      console.log(error.message);
    });

//Soal nomor 3//
// Menggunakan then catch
function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        data.results.forEach(pokemon => {
            const url = pokemon.url;
            const id = url.split('/')[6]; // Mendapatkan id dari url
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
            console.log(`Nama: ${pokemon.name}`);
            console.log(`Url: ${url}`);
            console.log(`Image: ${imageUrl}`);
            console.log('---------------------');
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  fetchPokemon();
// Menggunakan async await
async function fetchPokemon() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
  
      data.results.forEach(async pokemon => {
        const url = pokemon.url;
        const id = url.split('/')[6]; // Mendapatkan id dari url
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  
        console.log(`Nama: ${pokemon.name}`);
        console.log(`Url: ${url}`);
        console.log(`Image: ${imageUrl}`);
        console.log('---------------------');
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchPokemon();

//Soal nomor 4//
async function fetchTodos() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();
  
      const titles = todos.map(todo => todo.title);
      console.log(titles);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  fetchTodos();