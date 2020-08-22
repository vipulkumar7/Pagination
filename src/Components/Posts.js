import React from 'react';

const Posts = ({ posts, loading }) => {
	if (loading) {
		return <h2>Loading...</h2>;
	}
	console.log(posts);

	return (
		<>
			<table className="table">
				<thead style={{ background: 'teal', color: 'white' }}>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Flight Number</th>
						<th>Details</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((item) => {
						return (
							<>
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.title}</td>
									<td>{item.flight_number}</td>
									<td>{item.details}</td>
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Posts;
