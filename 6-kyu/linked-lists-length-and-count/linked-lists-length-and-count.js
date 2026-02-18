function Node(data) {
  this.data = data;
  this.next = null;
}
​
function length(head) {
  // Your code goes here.
  let l = 0;
  while(head !== null) {
    l++
    head = head.next
  }
  
  return l;
}
​
function count(head, data) {
  // Your code goes here.
  let c = 0;
  while(head !== null) {
    if(head.data == data) {
      c++
    }
    head = head.next
  }
  
  return c
  
}