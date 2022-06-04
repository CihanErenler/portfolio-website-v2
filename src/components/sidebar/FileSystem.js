import React from "react";
import Folders from "./Folders";

const FileSystem = () => {
	return (
		<section className="flex-1 ">
			<Folders title="personal-info" isFolder={true} byDefault={true} />
			{/* <Folders title="contact" isFolder={false} byDefault={true} /> */}
		</section>
	);
};

export default FileSystem;
