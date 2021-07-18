/**"xdescribe" to ignore tests 
 * "fdescribe to only run this tesst"
*/

describe('helloworld',()=>{

    let expected='';
    let match=null;
    beforeEach(()=>{
        expected='helloworld';
        match=new RegExp(/^hello/);
    });
    afterEach(()=>{
        let expected='';

    });
it('checks if equal',
    ()=>expect('helloworld').toBe(expected)
);
it('checks if not equal',
    ()=>expect('helloworld').not.toBe('helloworld123')
);
it('checks if equal',
    ()=>expect('helloworld').toMatch(match)
);
});