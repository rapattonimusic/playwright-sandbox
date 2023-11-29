import { test, expect } from '@playwright/test'

const BASE_URL = 'http://api.weatherstack.com'
const ACCESS_KEY = process.env.WEATHERSTACK_ACCESS_KEY
const CITY = 'Burbank'
const UNITS = 'f'  // 'f' is for Farenheit

test.only('Get the weather 2', async ({ request }) => {
    const apiUrl = `${BASE_URL}/current?access_key=${ACCESS_KEY}&query=${CITY}&units=${UNITS}`

    const response = await request.get(apiUrl)

    const responseBody = await response.json()

    expect(responseBody).not.toBeNull()
    expect(responseBody.location).toBeDefined()
    expect(responseBody.location.name).toBe('Burbank')

    expect(response.status()).toBe(200)
})