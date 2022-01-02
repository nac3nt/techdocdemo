document.querySelectorAll(".code").forEach(code => code.addEventListener('click', () => {
    navigator.clipboard.writeText(code.textContent)
}))