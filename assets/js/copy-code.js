// Copy button for code blocks
document.addEventListener('DOMContentLoaded', function() {
  // Find all code blocks (pre tags or .highlight blocks)
  const codeBlocks = document.querySelectorAll('pre, .highlight');

  codeBlocks.forEach(function(block) {
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.textContent = 'Copy';

    // Add click handler
    copyBtn.addEventListener('click', function() {
      // Get text content from the code block
      const codeText = block.querySelector('code') 
        ? block.querySelector('code').textContent 
        : block.textContent;

      // Copy to clipboard
      navigator.clipboard.writeText(codeText).then(function() {
        // Show feedback
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        
        // Reset after 2 seconds
        setTimeout(function() {
          copyBtn.textContent = originalText;
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy: ', err);
        copyBtn.textContent = 'Error';
      });
    });

    // Make sure the block has relative positioning for absolute button positioning
    if (getComputedStyle(block).position === 'static') {
      block.style.position = 'relative';
    }

    // Append button to the block
    block.appendChild(copyBtn);
  });
});
