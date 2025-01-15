<?php
include('db-connection.php');
include('header.php');

// Fetch the project details based on ID
if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $result = mysqli_query($conn, "SELECT * FROM projects WHERE id='$id'");
    $project = mysqli_fetch_assoc($result);
}
?>
<Style>
    img.img-fluid.rounded{
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
    }
</Style>
<section class="inner-banner" style="background-image: url(./images/hero-banner.webp);">
    <div class="container">
        <div class="heading-wrap">
            <h1 class="text-center"><?php echo $project['title']; ?></h1>
        </div>

    </div>
</section>
<!-- Main Content -->
<section class="my-5">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <!-- Display project image -->
                <img src="./images/<?php echo $project['image']; ?>" alt="Project Image" class="img-fluid rounded mb-4">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8 text-center">
                <p><?php echo $project['description']; ?></p>
            </div>
        </div>
    </div>
</section>
<section class="tech-se">
    <div class="container">
        <h2 class="text-center mb-5">Technologies We Use</h2>
        <div class="row text-center">
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- WordPress Icon -->
                    <i class="fab fa-wordpress"></i>
                </div>
                <p>WordPress</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Elementor Icon -->
                    <i class="fab fa-elementor"></i>
                </div>
                <p>Elementor</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Webflow Icon -->
                    <i class="fab fa-webflow"></i>
                </div>
                <p>Webflow</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- HTML Icon -->
                    <i class="fab fa-html5"></i>
                </div>
                <p>HTML</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- CSS Icon -->
                    <i class="fab fa-css3-alt"></i>
                </div>
                <p>CSS</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- JavaScript Icon -->
                    <i class="fab fa-js"></i>
                </div>
                <p>JavaScript</p>
            </div>

            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- jQuery Icon -->
                    <i class="fab fa-js-square"></i>
                </div>
                <p>jQuery</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Shopify Icon -->
                    <i class="fab fa-shopify"></i>
                </div>
                <p>Shopify</p>
            </div>
            <div class="col-lg-3 mb-3">
                <div class="tech-icon">
                    <!-- Figma Icon -->
                    <i class="fab fa-figma"></i>
                </div>
                <p>Figma</p>
            </div>
            <!-- <div class="col-lg-3 mb-3">
        <div class="tech-icon">
          <i class="fab fa-adobe"></i>
        </div>
        <p>Photoshop</p>
      </div> -->
        </div>
    </div>
</section>
<?php include('footer.php'); ?>