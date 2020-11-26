import pageStructure from './helpers';

const initFn = () => {
  const body = document.querySelector('body');

  const content = `
        <main class="container">
            <section>
                <h1>Weather Forecast</h1>
                <div id="search-form">
                    <form>
                        <input type="text" name="city" placeholder="Enter a city" />
                        <button id="search-btn">Search</button>
                        <button id="unit-btn" value="metric">Celsius</button>
                    </form>
                </div>
                <div id="search-results">
                </div>
            </section>
        </main>
  `;

  body.insertAdjacentHTML('beforeend', content);

  pageStructure();
};

export default initFn;