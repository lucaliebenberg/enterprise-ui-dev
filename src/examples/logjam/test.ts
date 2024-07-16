import { test, expect, vi } from 'vitest';

test.todo('it spies on the multiply method', () => {

    vi.mock('hi')

    vi.mock('node-fetch', () => {
        return {
            // some JSON response
        }
    })

});
