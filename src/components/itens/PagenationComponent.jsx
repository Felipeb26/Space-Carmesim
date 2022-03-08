import React from "react";

const page = ({itens, setPage}) =>{
    return (
		<div className="divBtn">
			{Array.from(Array(itens.totalPages), (item, index) => {
				return (
					<button
						className="Btn"
						value={index}
						onClick={(e) =>
							setPage(Number(e.target.value))
						}
					>
						{index + 1}
					</button>
				);
			})}
		</div>
	);
}

export default page;