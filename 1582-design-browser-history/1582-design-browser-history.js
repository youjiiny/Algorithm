class Node {
   constructor(val,prev = null, next = null){
	   this.val = val;
	   this.prev = prev;
	   this.next = next;
   }
}

class BrowserHistory{
		constructor(homepage){
				const node = new Node(homepage);
				this.head = node;
				this.current = node;
		}
		visit(url){
			this.current.next = new Node(url, this.current, null);
			this.current = this.current.next;
			return;
		}
		back(steps){
			while(steps > 0 && this.current.prev !== null){
					steps -= 1;
					this.current = this.current.prev;
			}
			return this.current.val;
		}
		forward(steps){
			while(steps > 0 && this.current.next !== null){
					steps -= 1;
					this.current = this.current.next;
			}
			return this.current.val;
		}
}