const api = {
    slider: 'https://www.hilltop.ge/api/slider/',
    rooms: 'https://www.hilltop.ge/api/room-types/',
    service: 'https://www.hilltop.ge/api/service/',
    about: 'https://www.hilltop.ge/api/about/',
    blogs: 'https://www.hilltop.ge/api/blog/',
    blog: (slug) => `https://www.hilltop.ge/api/blog/${slug}`,
    contact: 'https://www.hilltop.ge/api/contact/'
}
 
export default api