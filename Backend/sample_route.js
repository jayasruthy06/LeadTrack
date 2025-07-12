import express from 'express';
import multer from 'multer';
import yourmodel from '../models/yourmodel.js'

const router = express.Router();

//support image upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('your custom error'), false);
    }
  }
});

//CRUD operations
//update by ID
router.patch('/:id', upload.single('fileName'), async (req, res) => {
  try {
    ...your code
    res.status(200).json({
      success: true,
      message: 'your success message',
      data: return your edited data
    });

  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: validationErrors
      });
    }

    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: ''
      });
    }

    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: ``
      });
    }

    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

//similarly for GET, POST, PATCH, DELETE
router.get(), router.post(), router.patch(), router.delete()
.
.
.
export default router;
