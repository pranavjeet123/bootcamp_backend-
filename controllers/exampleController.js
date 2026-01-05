// @desc    Get all examples
// @route   GET /api/v1/examples
// @access  Public
exports.getExamples = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: [],
      message: 'Get all examples'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single example
// @route   GET /api/v1/examples/:id
// @access  Public
exports.getExample = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {},
      message: `Get example ${req.params.id}`
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new example
// @route   POST /api/v1/examples
// @access  Private
exports.createExample = async (req, res, next) => {
  try {
    res.status(201).json({
      success: true,
      data: req.body,
      message: 'Create new example'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update example
// @route   PUT /api/v1/examples/:id
// @access  Private
exports.updateExample = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: req.body,
      message: `Update example ${req.params.id}`
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete example
// @route   DELETE /api/v1/examples/:id
// @access  Private
exports.deleteExample = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: {},
      message: `Delete example ${req.params.id}`
    });
  } catch (error) {
    next(error);
  }
};
