<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
                <xsl:output method="xml"/>
                <xsl:template match="/">
                                <xsl:element name="series">
                                                <xsl:for-each select="movies/series/serie">
                                                                <xsl:element name="serie">
                                                                                <xsl:attribute name="id">
                                                                                                <xsl:value-of select="id"></xsl:value-of>
                                                                                </xsl:attribute>
                                                                                <xsl:element name="name">
                                                                                                <xsl:value-of select="name"></xsl:value-of>
                                                                                </xsl:element>
                                                                                <xsl:element name="title">
                                                                                                <xsl:value-of select="desc/title"></xsl:value-of>
                                                                                </xsl:element>
                                                                                <xsl:element name="image">
                                                                                                <xsl:value-of select="images/image[@id = '1']/url"></xsl:value-of>
                                                                                </xsl:element>
                                                                                <xsl:element name="review">
                                                                                                <xsl:value-of select="desc/en"></xsl:value-of>
                                                                                </xsl:element>
                                                                </xsl:element>
                                                </xsl:for-each>
                                </xsl:element>
                </xsl:template>
</xsl:stylesheet>
