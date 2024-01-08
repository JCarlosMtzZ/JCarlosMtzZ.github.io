async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.innerText = ""
    await node.type('Software\u00A0')
    
    while (true) {
      await node.type('Engineer')
      await sleep(2500)
      await node.delete('Engineer')
      await node.type('Developer')
      await sleep(2500)
      await node.delete('Developer')
    }
}
  
const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    //onst randomMs = 100 * Math.random()
    //return randomMs < 50 ? 10 : randomMs
    return 100
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}
  
customElements.define('type-async', TypeAsync, { extends: 'span' })
  
init()
  