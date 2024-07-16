import { test, expect, vi } from 'vitest';

test.todo('it spies on the multiply method', () => {

    vi.mock('hi')

    vi.mock('node-fetch', () => {
        return {
            // some JSON response
        }
    })

});

test.todo('use MSW to mock out network requests for API', () => {

    // use MSW library to mock out using service workers
    // similar syntax to express
    // mock out API requests if in development mode

})
