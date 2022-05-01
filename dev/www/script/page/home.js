'home',
`
<input i0="nav">

<div class="card">
    <strong class="header">Taurus CSS</strong>
    <hr>
    <p>
    This css library is exclusive avalible to people born between the days of April 20th and May 20th. Thanks for viewing.
    </p>
</div>

<div class="card">
    <b class="header">.card</b>

    <div class="layer">
    <strong>.layer</strong> 
    <p>
        <strong>Strong</strong> 
        Regular 
        <small>Small</small>
    </p>
    </div>

    <div class="layer">
    <a>Link</a>
    <a class="link">Link.link</a>
    <button class="link">Not A Link.link</button>
    </div>
    <div class="layer">
    <button>Button</button>
    <button class="button">Button.button</button>
    </div>
</div>

<div class="card">
    <form>
    <label class="label">Input</label>
    <input placeholder="Input" class="input">
    <label class="label">Dropdown</label>
    <select class="select">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </select>
    <label class="label">Button</label>
    <input value="Submit" type="submit" class="button" i0="submit">
    </form>
</div>
`,
ui => {

    i0.load('nav', {
      links: [
          {text: 'Link', href: '#'},
          {text: 'Link', href: '#'},
          {text: 'Link', href: '#'}
      ]
    }, ui.nav)

    ui.submit.onclick = e => e.preventDefault()
    
}