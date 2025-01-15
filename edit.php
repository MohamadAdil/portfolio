<?php
include('db-connection.php');

// Check if an ID is provided in the URL
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // Fetch project details
    $query = "SELECT * FROM projects WHERE id = $id";
    $result = mysqli_query($conn, $query);
    $project = mysqli_fetch_assoc($result);

    if (!$project) {
        die("Project not found.");
    }
}

// Handle form submission for updating the project
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['update'])) {
    $title = $_POST['title'];
    $description = $_POST['description'];

    // Check if a new image is uploaded
    if ($_FILES['image']['name']) {
        $image = $_FILES['image']['name'];
        $target = './images/' . basename($image);
        move_uploaded_file($_FILES['image']['tmp_name'], $target);
    } else {
        $image = $project['image']; // Keep the old image if none is uploaded
    }

    // Update project in the database
    $query = "UPDATE projects SET title = '$title', description = '$description', image = '$image' WHERE id = $id";
    mysqli_query($conn, $query);

    echo "<script>alert('Project updated successfully!'); window.location.href='admin.php';</script>";
}
?>


<!-- Include header here -->
<?php include('header.php'); ?>
<style>
    img {
        max-width: 100px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
</style>
<div class="container mt-5">
    <h1 class="text-center">Edit Project</h1>

    <!-- Edit Project Form -->
    <div class="card mb-4">
        <div class="card-header">
            <h2>Edit Project Details</h2>
        </div>
        <div class="card-body">
            <form action="edit.php?id=<?php echo $project['id']; ?>" method="POST" enctype="multipart/form-data">
                <div class="mb-3">
                    <input type="text" name="title" class="form-control" value="<?php echo $project['title']; ?>" required>
                </div>
                <div class="mb-3">
                    <textarea name="description" class="form-control" required><?php echo $project['description']; ?></textarea>
                </div>
                <div class="mb-3">
                    <label>Current Image</label>
                    <img src="./images/<?php echo $project['image']; ?>" alt="Current Project Image" width="100">
                </div>
                <div class="mb-3">
                    <input type="file" name="image" class="form-control">
                    <small>Leave this field empty if you don't want to change the image.</small>
                </div>
                <button type="submit" name="update" class="btn btn-success">Update Project</button>
            </form>
        </div>
    </div>
</div>

<!-- Include footer here -->
<?php include('footer.php'); ?>