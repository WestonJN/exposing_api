describe("Testing endpoints",() =>{
    
    const axios = require('axios');
    const visitor = {
        name: 'Wes',
        assistant: 'Bob',
        age: 25,
        date: '12/02/2020',
        time: '12:02:02',
        comments: 'No comment'
    }
    it('Should add new visitor', async () => {
		const res = await axios.post('http://localhost:5000/add-visitor', visitor);

		objVisitor = res.data.visitor;
		// visitor_id = objVisitor.id;

		expect(res.data.status).toBe('Is Okay');
		// expect(objVisitor.id).toEqual(visitor_id);
		expect(objVisitor.name).toEqual(visitor.name);
		expect(objVisitor.age).toEqual(visitor.age);
		expect(new Date(objVisitor.date)).toEqual(new Date(visitor.date));
		expect(objVisitor.time).toEqual(visitor.time);
		expect(objVisitor.assistant).toEqual(visitor.assistant);
		expect(objVisitor.comments).toEqual(visitor.comments);
	});
})