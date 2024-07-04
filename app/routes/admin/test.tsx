import { createRoute } from 'honox/factory'

export const GET = createRoute(async (c) => {
    return c.render('admin/test')
})