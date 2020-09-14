const root = document.querySelector(".root");

//Define 1 to many realtion dependency relationsihp
// subject -> many other (obesrver)
// many other (obervers) = can be functions that observe the subject and waiting to be triggered via a signal from the subject
// EventListeners?

function Subject() {
  this.observers = []; //array of functions
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },

  unsubscribe: function (fnRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnRemove) return fn;
    });
  },

  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("observer 1 firing");
}

function Observer2() {
  console.log("observer 2 firing");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubscribe(Observer2);

subject.fire();
