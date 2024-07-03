const loadScript = (url: string) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.async = true
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
    })
}

const mountScript = (url: string) => {
    loadScript(url)
        .then(() => {
            console.log('Script loaded successfully!')
        })
        .catch((error) => {
            console.error('Script loading failed!', error)
        })
}

export { loadScript, mountScript }
