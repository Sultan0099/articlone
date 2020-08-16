import multer from "multer";

import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, "..", "..", "uploads");

        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const fileName = `${file.fieldname}-${Date.now()}${path.extname(
            file.originalname
        )}`;

        cb(null, fileName);
    }
});

const upload = multer({ storage });

export default upload;
