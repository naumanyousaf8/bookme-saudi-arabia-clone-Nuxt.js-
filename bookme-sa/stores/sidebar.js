export const useSidebarStore = () => {
    const isOpen = ref(false)
  
    const open = () => {
      isOpen.value = true
    }
  
    const close = () => {
      isOpen.value = false
    }
  
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
  
    return {
      isOpen: readonly(isOpen),
      open,
      close,
      toggle
    }
  }