// Try accessing it at http://localhost:3000/api/hello. You should see {"text":"Hello"}.

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (_req, res) => {
	res.status(200).json({ text: 'Hello' });
}