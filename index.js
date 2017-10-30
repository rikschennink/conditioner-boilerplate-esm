// import the conditioner lib
import('./node_modules/conditioner-core/dist/conditioner-core-es6.js').then(conditioner => {

    // correct module name location
    conditioner.addPlugin({
    
        // converts module aliases to paths
        moduleSetName: (name) => `/ui/${ name }.js`
        
    });

    // lets go!
    conditioner.hydrate( document.documentElement );
    
});
