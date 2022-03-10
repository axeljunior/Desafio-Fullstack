export default function ({ $axios }, inject) {
    const api = $axios.create({
        headers: {
        common: {
            Accept: 'text/plain, */*'
        }
        }
    })

    // Set baseURL to something different
    api.setBaseURL('http://localhost:3333')

    // Inject to context as $api
    inject('api', api)
}