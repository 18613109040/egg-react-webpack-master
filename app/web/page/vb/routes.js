import ClassIfication from 'containers/ClassIfication/index';
import Home from 'containers/Home/index';
const NotFound = () => {
    return (
        <Route render={({ staticContext }) => {
            if (staticContext) {
                staticContext.status = 404;
            }
            return (
                <div>
                    <h1>404 : Not Found</h1>
                </div>
            )
        }}/>
    );
};
const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/classification',
        component: ClassIfication
    },
    {
        path: '*',
        component: NotFound
    }
];

export default routes;
