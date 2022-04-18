//iterative approach

const depthFirstValues=(root) => {
    const stack = [root]
    while (stack.length > 0) {
        const current = stack.pop()
        console.log(current.val);

        if(current.left) stack.push(current.left)
        if(current.right) stack.push(current.right)
    }


}


for (let i = 0; i < contacts.length; i++) {

    
}