
const requests = {
    fetchShoes: `https://the-sneaker-database.p.rapidapi.com/sneakers?limit=12&brand=nike`,
    fetchBrands: `https://the-sneaker-database.p.rapidapi.com/brands`
}

const brands_logo_req = [
    {
        logo_image: `https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png`
    },
    {
        logo_image: `https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png`,
    },
    {
        logo_image: `https://1000logos.net/wp-content/uploads/2021/04/Louis-Vuitton-logo.png`,
    },
    {
        logo_image: `https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo-1972-2006.png`,
    },
    {
        logo_image: `https://pnggrid.com/wp-content/uploads/2021/06/Puma-black-logo.png`,

    }
]

const gendars = ['male', 'female']

const sports = ['Running', 'Basketball', 'Football', 'Cricket', 'Gymnastic', 'Tennis', 'Swimming', 'SkateBoarding', 'SnowBoarding', 'Rugby', 'Golf']
const tech = ['Air Jordan', 'Air Max', 'Air Force', 'Nike Free Run', 'Cortez', 'downshifter', 'dunks', 'fusion', 'gripper']

const header = {
    'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
    'x-rapidapi-key': '96ef244745msha6fa766fc6885acp1a2269jsnf3b4e60a9750'
}

export {
    requests,
    header,
    brands_logo_req,
    gendars,
    sports,
    tech
}
