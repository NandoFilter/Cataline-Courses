import { Directive } from 'vue'

const highlight: Directive = {
  beforeMount(el: HTMLElement, binding) {
    console.log(el) // <h1>Hello World</h1>
    console.log(binding.arg) // background
    console.log(binding.modifiers) // shadow
    console.log(binding.value) // 'blue'

    if (binding.arg === 'background') {
      el.style.background = binding.value
    } else {
      el.style.color = binding.value
    }

    if (binding.modifiers.shadow) {
      el.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0.5)'
    }
  },
}

export default highlight
