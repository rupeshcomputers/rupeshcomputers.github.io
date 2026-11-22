<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="hi">
      <head>
        <title>XML Sitemap - Rupesh Computers</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: #f4f7f6;
            color: #333;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #1e3a8a, #2563eb);
            color: #fff;
            padding: 24px 30px;
          }
          .header h1 {
            margin: 0 0 8px 0;
            font-size: 22px;
          }
          .header p {
            margin: 0;
            font-size: 14px;
            opacity: 0.9;
          }
          .stats {
            background: #eff6ff;
            padding: 12px 30px;
            font-size: 14px;
            color: #1e40af;
            border-bottom: 1px solid #dbeafe;
            font-weight: 500;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th {
            background-color: #f8fafc;
            color: #475569;
            font-weight: 600;
            text-align: left;
            padding: 14px 20px;
            font-size: 13px;
            border-bottom: 2px solid #e2e8f0;
          }
          td {
            padding: 13px 20px;
            border-bottom: 1px solid #f1f5f9;
            font-size: 14px;
          }
          tr:hover {
            background-color: #f8fafc;
          }
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
          .badge {
            background: #dcfce7;
            color: #166534;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
          }
          .footer {
            text-align: center;
            padding: 16px;
            font-size: 13px;
            color: #64748b;
            background: #f8fafc;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>RUPESH COMPUTERS - वेबसाइट साइटमैप</h1>
            <p>यह XML Sitemap सर्च इंजन (Google, Bing) के लिए तैयार किया गया है।</p>
          </div>
          <div class="stats">
            इस साइटमैप में कुल <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> पेज शामिल हैं।
          </div>
          <table>
            <thead>
              <tr>
                <th>पेज का लिंक (URL)</th>
                <th>प्राथमिकता</th>
                <th>अपडेट अंतराल</th>
                <th>अंतिम संशोधन</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge"><xsl:value-of select="sitemap:priority"/></span>
                  </td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            © 2026 Rupesh Computers (Chongribahar &amp; Dokda) | <a href="https://rupeshcomputers.in/">मुख्य वेबसाइट पर वापस जाएं</a>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
