<?php include 'header.php'; ?>
<!--  -->
<section class="inner-banner" style="background-image: url(./images/hero-banner.webp);">
  <div class="container">
    <div class="heading-wrap">
      <h1>Portfolio</h1>
      <p>Explore My Work as a Front-End Developer & Web Designer | Creating Visually Stunning, Responsive, and User-Friendly Websites</p>
    </div>

  </div>
</section>
<!--  -->
<section class="rec-projects">
  <div class="container">
    <div class="heading-wrap">
      <h2>All projects</h2>
    </div>

    <?php
    // Connect to the database
    include('db-connection.php');

    // Set the number of items per page
    $items_per_page = 12;

    // Get the current page number, default to 1 if not set
    $current_page = isset($_GET['page']) ? $_GET['page'] : 1;

    // Calculate the starting item for the current page
    $start_from = ($current_page - 1) * $items_per_page;

    // Fetch total number of projects for pagination
    $query_total = "SELECT COUNT(*) FROM projects";
    $result_total = mysqli_query($conn, $query_total);
    $total_projects = mysqli_fetch_row($result_total)[0];

    // Calculate the total number of pages
    $total_pages = ceil($total_projects / $items_per_page);

    // Fetch project data for the current page
    $query = "SELECT * FROM projects LIMIT $start_from, $items_per_page";
    $result = mysqli_query($conn, $query);
    ?>

    <div class="row g-4">
      <?php while ($project = mysqli_fetch_assoc($result)): ?>
        <div class="col-lg-3">
          <a href="project-detail.php?id=<?php echo $project['id']; ?>">
            <div class="pro-card">
              <img src="./images/<?php echo $project['image']; ?>" class="card-img-top" alt="Project Image">
              <div class="pro-card-body">
                <h5><?php echo $project['title']; ?></h5>
                <p><?php echo substr($project['description'], 0, 100); ?>...</p>
              </div>
            </div>
          </a>
        </div>
      <?php endwhile; ?>
    </div>

    <!-- Pagination Links -->
    <div class="pagination">
      <ul class="pagination justify-content-center">
        <?php if ($current_page > 1): ?>
          <li class="page-item"><a class="page-link" href="?page=<?php echo $current_page - 1; ?>">Previous</a></li>
        <?php endif; ?>

        <?php for ($i = 1; $i <= $total_pages; $i++): ?>
          <li class="page-item <?php echo ($i == $current_page) ? 'active' : ''; ?>">
            <a class="page-link" href="?page=<?php echo $i; ?>"><?php echo $i; ?></a>
          </li>
        <?php endfor; ?>

        <?php if ($current_page < $total_pages): ?>
          <li class="page-item"><a class="page-link" href="?page=<?php echo $current_page + 1; ?>">Next</a></li>
        <?php endif; ?>
      </ul>
    </div>

  </div>
</section>

<?php include 'footer.php'; ?>