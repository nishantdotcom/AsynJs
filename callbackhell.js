// As we know that callback hell is the horizontal increasing into the code

abc(url, function pqr() {
  if (err) {
  } else {
    abc(url1, function pqr2() {
      if (err) {
      } else {
        abc(url3, function pqr3() {
          if (err) {
          } else {
            abc(url4, function pqr4() {
              //this is a callback hell
            });
          }
        });
      }
    });
  }
});
