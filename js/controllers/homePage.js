export const HomePage = async () => {
    const test = document.createElement('div');
    test.innerHTML = `<h1>Welcome to the Home Page</h1>
    <p>This is the main landing page of our application.</p>`;
    return test;
}