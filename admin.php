<?php
include('db-connection.php');

// Handle form submission for adding a project
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['add'])) {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $image = $_FILES['image']['name'];

    // Upload the image
    $target = './images/' . basename($image);
    move_uploaded_file($_FILES['image']['tmp_name'], $target);

    // Insert project into the database
    $query = "INSERT INTO projects (title, description, image) VALUES ('$title', '$description', '$image')";
    mysqli_query($conn, $query);

    echo "<script>alert('Project added successfully!'); window.location.href='admin.php';</script>";
}

// Fetch existing projects
$query = "SELECT * FROM projects";
$result = mysqli_query($conn, $query);

// Handle project deletion
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $query = "DELETE FROM projects WHERE id=$id";
    mysqli_query($conn, $query);
    echo "<script>alert('Project deleted successfully!'); window.location.href='admin.php';</script>";
}
?>

<?php include('header.php'); ?>
<style>
    img {
        max-width: 100px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
</style>
<div class="container mt-5">
    <h1 class="text-center">Admin Panel</h1>

    <!-- Add New Project Form -->
    <div class="card mb-4">
        <div class="card-header">
            <h2>Add New Project</h2>
        </div>
        <div class="card-body">
            <form action="admin.php" method="POST" enctype="multipart/form-data">
                <div class="mb-3">
                    <input type="text" name="title" class="form-control" placeholder="Project Title" required>
                </div>
                <div class="mb-3">
                    <textarea name="description" class="form-control" placeholder="Project Description" required></textarea>
                </div>
                <div class="mb-3">
                    <input type="file" name="image" class="form-control" >
                </div>
                <button type="submit" name="add" class="btn btn-primary">Add Project</button>
            </form>
        </div>
    </div>

    <!-- Display Existing Projects -->
    <h2 class="text-center mb-4">Existing Projects</h2>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php while ($project = mysqli_fetch_assoc($result)): ?>
                <tr>
                    <td><?php echo $project['id']; ?></td>
                    <td><?php echo $project['title']; ?></td>
                    <td><?php echo $project['description']; ?></td>
                    <td><img src="./images/<?php echo $project['image']; ?>" alt="Project Image"></td>
                    <td>
                        <a href="edit.php?id=<?php echo $project['id']; ?>" class="btn btn-warning btn-sm">Edit</a>
                        <a href="admin.php?delete=<?php echo $project['id']; ?>" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this project?')">Delete</a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </tbody>
    </table>
</div>

<!-- Include footer here -->
<?php include('footer.php'); ?>