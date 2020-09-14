const root = document.querySelector(".root");

const items = [1, "string", false, 1.26];

function Iterator(items) {
  this.items = items;
  this.index = items.length - 1;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index >= 0;
  },
  next: function () {
    return this.items[this.index--];
  },
};

function say() {
  var li = document.createElement("li");
  li.setAttribute("class", "list-el");
  li.textContent = iter.next();

  root.appendChild(li);
}

const iter = new Iterator(items);

while (iter.hasNext()) {
  say.call();
}
//iterating backwards
