'nav',
`
    <nav class="nav">
        <div>
            <a class="brand" i0="brand"><img src="./asset/logo-stacked.PNG" width="64px" height="64px"></a>
            <a class="brand" i0="logo"><img src="./asset/logo.PNG"  width="64px" height="64px"></a>
        </div>
        <div class="nav-dropdown">
            <button i0="dropdown">Navigate</button>
            <div i0="links" class="hidden container">
            </div>
        </div>
    </nav>
`,
(ui, props) => {

    if(props.logo) ui.logo.href = props.logo

    if(props.links) props.links.forEach(link => {
        ui.links.appendChild(
            i0.element(`<a class="nav-link" href="${link.href}">${link.text}</a>`)
        )
    })
    else ui.dropdown.classList.add('hidden')

    let lock = false
    ui.dropdown.onclick = () => {
        if(!lock){
            lock = true
            if(ui.links.classList.contains('hidden')){
                ui.links.classList.remove('hidden')
                ui.dropdown.innerText = 'X'
            } else {
                ui.links.classList.add('hidden')
                ui.dropdown.innerText = 'Navigate'
            }
            setTimeout(() => lock = false, 300);
        }
    }

}