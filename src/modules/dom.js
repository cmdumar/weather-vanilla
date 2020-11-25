const initFn = () => {
  const body = document.querySelector('body');

  const content = `
        <main class="container">
            <section>
                <div id="search-form">
                    <form>
                        <input type="text" name="city" placeholder="enter a city" />
                        <button id="search-btn">Search</button>
                    </form>
                </div>
                <div id="search-results">
                </div>
            </section>
        </main>
    `;

  body.insertAdjacentHTML('beforeend', content);
};

export default initFn;